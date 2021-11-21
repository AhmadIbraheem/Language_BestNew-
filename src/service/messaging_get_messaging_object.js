import { getMessaging, getToken } from "firebase/messaging";

const messaging = getMessaging();
// Add the public key generated from the console here.
messaging.getToken({ vapidKey: "BMt5m5gheH4yUnb-Hz0cT38Io-19cfWwVdFJVyk-HbPeYemY_GMHKH0tSwdHezTvTb4KYTDUQTaK89p5GKnf-lM" });
