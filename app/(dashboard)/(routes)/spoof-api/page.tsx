import {Heading} from "@/components/heading";
import { ScanFace } from "lucide-react";

const SpoofAPIPage = () => {
    return ( <>
    <div>
        <Heading title="Face Antispoof API"
        description="A State Of the ART Deep Learning Model with 99% test accurate on Detecting Spoof Images"
        icon={ScanFace}
        iconColor="text-violet-500"
        bgColor="bg-violet-100"/>
    </div>
    </> );
}
 
export default SpoofAPIPage;