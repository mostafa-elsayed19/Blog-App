import Spinner from "./_components/Spinner";
import Wrapper from "./_components/Wrapper";

function loading() {
  return (
    <Wrapper className="flex min-h-full items-center justify-center">
      <Spinner />
    </Wrapper>
  );
}

export default loading;
