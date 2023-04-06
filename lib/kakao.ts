const VERCEL_URL = process.env.NEXT_PUBLIC_VERCEL_URL;
const REST_API_KEY = process.env.NEXT_PUBLIC_REST_API_KEY;
const REDIRECT_URI = VERCEL_URL
  ? `https://${VERCEL_URL}/users/kakao/callback`
  : process.env.NEXT_PUBLIC_REDIRECT_URI;

export const KAKAO_AUTH_URI = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
