import http from "../services/httpServices";

export function getOtp(data) { //phoneNumber
    return http.post("/user/get-otp", data).then(({data})=>data.data);
}

export function checkOtp(data) {
    return http.post("/user/check-otp", data);
}