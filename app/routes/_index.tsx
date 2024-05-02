import type { MetaFunction } from "@remix-run/node";
import { Button } from "~/components/ui/button";

export const meta: MetaFunction = () => {
  return [
    { title: "TechCloud" },
    { name: "description", content: "Bem vindos a TechCloud" },
  ];
};

export default function Index() {
  return (
    <div>
      <h1 className="bg-cyan-400">Teste1</h1>
      <Button>Click me</Button>
      <p className="bg-cyan-600">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus, ducimus rem iste corrupti cupiditate commodi sit ullam rerum atque exercitationem non voluptas labore consequatur pariatur sed ut magni minima nobis!</p>
    </div>
  );
}
