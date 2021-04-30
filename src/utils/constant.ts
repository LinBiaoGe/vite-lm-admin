interface Constants {
  OK: number;
  CLIENT_ERROR: number;
  USER_ERROR: number;
}
const constants = {
  OK: 0,
  CLIENT_ERROR: 10000,
  USER_ERROR: 11000,
  NO_AUTHENTICATE: 11100,
  NO_LOGIN: 11111,
  TOKEN_EXPIRE: 11112,
  TOKEN_ERROR: 11119,
  REFRESH_EXPIRE: 11122,
  REFRESH_ERROR: 11129,
  NO_AUTHORIZE: 11300,
  VALIDATE_ERROR: 18000,
  REQUEST_FREQUENT: 19000,

  SERVER_ERROR: 50000,
  NO_DATA: 51000,

  ROOT_ID: "00000000000000000000000000000000",
  CRYPTO_KEY: "1234567890123456",

  AUTHORIZATION_TOKEN: "authorization",
  REFRESH_TOKEN: "refresh_token",
  REFRESH_URL: "/admin/refreshToken",
  JWT_SPLITOR: "rtfgv.by.uhjnm",
};

export default constants;
