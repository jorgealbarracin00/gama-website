import MemoirFile from '@/components/specimen/MemoirFile';
import { getSpecimen } from '@/lib/specimens/registry';

export default function IncMemoir() {
  return <MemoirFile specimen={getSpecimen('memoir')} />;
}
