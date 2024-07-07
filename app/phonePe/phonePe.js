import PhonePePaymentSDK from 'react-native-phonepe-pg';
import {sha256} from 'react-native-sha256';
import base64 from 'base-64';

//uat

const environment = 'SANDBOX';
const merchantId = 'PGTESTPAYUAT86';
const merchantUid = 'MU933037302229373';
const salt = '96434309-7796-489d-8924-ab56988a6076';
const packageName = 'com.phonepe.simulator';

//Production

// const environment = 'PRODUCTION';
// const merchantId = 'PROVIDE_BY_PHONEPE_TEAM';
// const merchantUid = 'MUID123';
// const salt = 'PROVIDE_BY_PHONEPE_TEAM';
// const packageName = 'com.phonepe.app';
const saltIndex = '1';
const mobileNo = '9999999999';
const appId = null;
const logIng = true;
const callbackUrl =
  'https://us-central1-hungry-191f3.cloudfunctions.net/webHook';
const apiEndPoint = '/pg/v1/pay';
let checksum = '';

//function for generate Checksum

const getChecksum = async body => {
  //  checksum = sha256(base64Body + apiEndPoint + salt) + ### + saltIndex; ----FORMAT
  try {
    const base64body = await base64.encode(JSON.stringify(body));
    const sha256value = await sha256(base64body + apiEndPoint + salt);
    checksum = sha256value + '###' + saltIndex;
  } catch (error) {
    console.log('getChecksum error', error);
  }
};

//initialize phonePe
export const phonePeInit = async () => {
  try {
    await PhonePePaymentSDK.init(environment, merchantId, appId, logIng);
    console.log('PhonePePaymentSDK init success');
    return true;
  } catch (error) {
    console.log('PhonePePaymentSDK init failed', err);
    throw err;
  }
};

//start payment
export const startPayment = async (txnId, amount) => {
  try {
    const body = {
      merchantId: merchantId,
      merchantTransactionId: txnId,
      merchantUserId: merchantUid,
      amount: amount,
      callbackUrl: callbackUrl,
      mobileNumber: mobileNo,
      paymentInstrument: {
        type: 'PAY_PAGE',
      },
    };
    await getChecksum(body);
    const base64body = await base64.encode(JSON.stringify(body));
    const res = await PhonePePaymentSDK.startTransaction(
      base64body,
      checksum,
      packageName,
      null,
    );
    console.log(res);
    if (res.status == 'SUCCESS') {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.log('startPayment error', error);
    throw error;
  }
};
