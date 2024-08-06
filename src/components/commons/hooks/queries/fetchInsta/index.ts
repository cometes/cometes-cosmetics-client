import axios from "axios";

export async function useFetchInsta() {
  const { data } = await axios.get(`
https://graph.instagram.com/${process.env.NEXT_PUBLIC_INSTAGRAM_USER_ID}/media?fields=id,media_type,media_url,permalink,thumbnail_url,username,caption&access_token=${process.env.NEXT_PUBLIC_INSTAGRAM_ACCESS_TOKEN}
`);

  console.log(data);

  return {
    data
  };
}
