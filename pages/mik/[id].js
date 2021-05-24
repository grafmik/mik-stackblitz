import { useRouter } from 'next/router';

export default function Mik() {
  const router = useRouter();
  const { id } = router.query;

  return <div>mik {id}</div>;
}
