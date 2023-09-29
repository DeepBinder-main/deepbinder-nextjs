"use client"

import { ScanFace } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Heading } from "@/components/heading"

const SpoofAPIPage = () => {
  return (
    <>
      <div>
        <Heading
          title="Face Antispoof API"
          description="A State Of the ART Deep Learning Model with 99% test accurate on Detecting Spoof Images"
          icon={ScanFace}
          iconColor="text-violet-500"
          bgColor="bg-violet-100"
        />
        <div className="px-4 lg:px-8 space-y-4">
          <div className="text-muted-foreground text-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="h-[310px] w-auto  border-dashed border-4 border-violet-500 rounded-lg flex items-center justify-center lg:row-span-2">
                <div className="text-lg m-2 inline-flex items-baseline">
                    Drag & Drop or Click to Upload or Select items from Examples
                </div>
              </div>
              <div className="h-[200px] w-auto border-solid border-violet-500 border-4 rounded-lg lg:col-span-2">
                <h3 className="md:text-lg lg:text-2xl font-bold  flex flex-row justify-center mt-2">
                  Results
                </h3>
                <div className="grid grid-cols-3 gap-y-4  m-4 ">
                  <div className="text-xl">Real</div>
                  <div className="col-span-2">
                    <Progress value={33} />
                  </div>
                  <div className="text-xl">Fake</div>
                  <div className="col-span-2">
                    <Progress value={66} />
                  </div>
                </div>
              </div>
              <div className="h-[90px] w-auto  lg:col-span-2 flex items-center justify-center">
                <Button className="w-[50%] text-lg lg:w-[25%]">Submit</Button>
              </div>
            </div>
            <div className="m-7">
            <h3 className="md:text-xl lg:text-2xl font-bold  flex flex-row justify-center mt-2 m-4">
                    Examples
                    </h3>
            <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-slate-500  h-[150px] w-[auto]">01</div>
                <div className="bg-slate-500  h-[150px] w-[auto]">01</div>
                <div className="bg-slate-500  h-[150px] w-[auto]">01</div>
                <div className="bg-slate-500  h-[150px] w-[auto]">01</div>

            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SpoofAPIPage
