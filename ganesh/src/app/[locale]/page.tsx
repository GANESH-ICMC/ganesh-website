import EncryptButton from "@/components/button/encrypt-button";
import Terminal from "@/components/cards/terminal";
import ClientHomeComponent from "@/components/client/home";
import { Sponsor } from "@/models/sponsor";
import { fetchSponsors } from "@/services/data";
import Image from "next/image";

export default async function Page() {
  const sponsors: Sponsor[] = await fetchSponsors();
  return (
    <ClientHomeComponent
      sponsors={sponsors}
    />
  );
}
