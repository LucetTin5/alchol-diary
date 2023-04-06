const VERCEL_URL = process.env.NEXT_PUBLIC_VERCEL_URL;
const REST_API_KEY = process.env.NEXT_PUBLIC_REST_API_KEY;
const REDIRECT_URI = VERCEL_URL?.startsWith("https://")
  ? "https://".concat(VERCEL_URL).concat("/users/kakao/callback")
  : "http://localhost:3000/users/kakao/callback";

export const KAKAO_AUTH_URI = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
