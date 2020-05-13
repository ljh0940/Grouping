import SplashStore from './SplashStore';
import SignProcessStore from './SignProcessStore';
import SignUpEmailStore from './SignUpEmailStore';
import SignUpPasswordStore from './SignUpPasswordStore';
import SignUpPhoneStore from './SignUpPhoneStore';
import SignUpBasicInfoStore from './SignUpBasicInfoStore';

const splashStore = new SplashStore();
const signProcessStore = new SignProcessStore();
const signUpEmailStore = new SignUpEmailStore(signProcessStore);
const signUpPasswordStore = new SignUpPasswordStore(signProcessStore);
const signUpPhoneStore = new SignUpPhoneStore(signProcessStore);
const signUpBasicInfoStore = new SignUpBasicInfoStore(signProcessStore);

export default {
  splashStore: splashStore,
  signProcessStore: signProcessStore,
  signUpEmailStore: signUpEmailStore,
  signUpPasswordStore: signUpPasswordStore,
  signUpPhoneStore: signUpPhoneStore,
  signUpBasicInfoStore: signUpBasicInfoStore,
};
