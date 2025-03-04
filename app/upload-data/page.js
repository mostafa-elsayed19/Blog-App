import Wrapper from "../_components/Wrapper";

import { getBlogs, uploadData } from "../_lib/actions";

function page() {
  return (
    <Wrapper className="flex flex-col gap-4">
      <form action={uploadData}>
        <button className="rounded-xl bg-buttonBg px-6 py-2 font-bold text-lightText">
          Upload Data
        </button>
      </form>
      <form action={getBlogs}>
        <button className="rounded-xl bg-buttonBg px-6 py-2 font-bold text-lightText">
          Get Data
        </button>
      </form>
    </Wrapper>
  );
}

export default page;
