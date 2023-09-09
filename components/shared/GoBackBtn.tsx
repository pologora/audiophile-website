import { useRouter } from 'next/navigation';

const GoBackBtn = () => {
  const router = useRouter();
  return (
    <button className='opacity-80 my-6' onClick={() => router.back()}>
      Go Back
    </button>
  );
};
export default GoBackBtn;
