import { specimens } from "../../../lib/data/specimens";

export function GET() {
  return Response.json({ specimens });
}
