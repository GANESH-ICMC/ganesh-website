import Terminal from "@/components/cards/terminal";
import Container from "@/components/container";

export default function ContentPage() {
  return (
    <main>
      <div className="flex flex-col gap-12 items-center pt-32 pb-12">
        <Container>
          <Terminal>
            <div className="text-2xl font-mono font-bold">
              Our Sponsors
            </div>
          </Terminal>
        </Container>
      </div>
    </main>
  );
}