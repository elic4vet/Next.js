import React from "react";
import Navbar from "./Navbar";

type Props = {}

export default function NavbarContainer({ }: Props) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between">
      <Navbar />
    </div>
      );
}
