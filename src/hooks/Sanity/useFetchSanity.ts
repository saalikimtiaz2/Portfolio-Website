import { ProfileType } from "@/interfaces/sanity";

const useFetchSanity = async (func: () => {}): [ProfileType] => {
  const data: {} = await func();

  return [data];
};

export default useFetchSanity;
