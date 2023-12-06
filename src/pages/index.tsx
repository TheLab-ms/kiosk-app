import React from "react";
import { Button } from "@nextui-org/react";
import DefaultLayout from "@/layouts/default";

export default function App() {
  return (
    <DefaultLayout>
      <div className="flex gap-4 items-center justify-center py-15">
        <Button radius="full" className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg" size="lg" color="primary">
          Default
        </Button>
        <Button radius="full" className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg" size="lg" color="primary">
          Tour
        </Button>
      </div>
      <div className="flex gap-4 items-center justify-center">

        <Button radius="full" className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg" size="lg" color="primary">
          Reserve a Machine
        </Button>
        <Button radius="full" className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg" size="lg" color="primary">
          Help
        </Button>
      </div>
      <div className="flex gap-4 items-center justify-center">

        <Button radius="full" className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg" size="lg" color="primary">
          Events
        </Button>
        <Button radius="full" className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg" size="lg" color="primary" >
          Sign Out
        </Button>
      </div>
    </DefaultLayout>
  )
};
