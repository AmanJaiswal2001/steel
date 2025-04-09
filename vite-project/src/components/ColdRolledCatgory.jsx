import React from 'react'
import CardSheet from './CardSheet';
import { Link } from 'react-router-dom';

const ColdRolledCatgory = () => {
  
    const cardData = [
        {
          title: "JSW Steel Cold Rolled Sheet IS 2062:2011 E250Br",
          brand: "Brand: JSW Steel",
          thickness: "1.6-25mm",
          width: "900-2000mm",
          buttonName: "Purchase now",
          delivery: "Delivery in 2-5 days",
          image: "https://images.ctfassets.net/o0otttl8ele8/2mf3iSpFsm4edsiOtsQLSk/121916c354de98f0c44a31ed261ab8d0/ezgif.com-gif-maker__41_.webp?fit=fill&w=280&h=153&fm=webp",
          length:"2500-12000mm"
        },
        {
          title: "JSW Steel Cold Rolled Sheet IS 2062:2011 E250Br",
          brand: "Brand: JSPL",
          thickness: "0.5-3mm",
          width: "600-1500mm",
          buttonName: "Purchase now",
          delivery: "Delivery in 3-7 days",
          image: "https://images.ctfassets.net/o0otttl8ele8/2mf3iSpFsm4edsiOtsQLSk/121916c354de98f0c44a31ed261ab8d0/ezgif.com-gif-maker__41_.webp?fit=fill&w=280&h=153&fm=webp",   
          length:"2500-12000mm" },
        {
          title: "JSW Steel Cold Rolled Sheet IS 2062:2011 E250Br",
          brand: "Brand: SAIL",
          thickness: "2-40mm",
          width: "1200-2500mm",
          buttonName: "Purchase now",
          delivery: "Delivery in 4-6 days",
          image: "https://images.ctfassets.net/o0otttl8ele8/2mf3iSpFsm4edsiOtsQLSk/121916c354de98f0c44a31ed261ab8d0/ezgif.com-gif-maker__41_.webp?fit=fill&w=280&h=153&fm=webp",
          length:"2500-12000mm"
        },
         {
          title: "JSW Steel Cold Rolled Sheet IS 2062:2011 E250Br",
          brand: "Brand: Essar Steel",
          thickness: "1.2-16mm",
          width: "800-2200mm",
          buttonName: "Purchase now",
          delivery: "Delivery in 5-8 days",
          image: "https://images.ctfassets.net/o0otttl8ele8/3HILc9ZoCKpUsn6crHWRSA/f25ae168abf380cf756b19a6e22caefa/ezgif.com-gif-maker__35_.webp?fit=fill&w=280&h=153&fm=webp",
          length:"2500-12000mm"
        },
         {
          title: "JSW Steel Cold Rolled Sheet IS 2062:2011 E250Br",
          brand: "Brand: Jindal Steel",
          thickness: "0.4-2mm",
          width: "700-1800mm",
          buttonName: "Purchase now",
          delivery: "Delivery in 2-4 days",
          image: "https://images.ctfassets.net/o0otttl8ele8/2mf3iSpFsm4edsiOtsQLSk/121916c354de98f0c44a31ed261ab8d0/ezgif.com-gif-maker__41_.webp?fit=fill&w=280&h=153&fm=webp",
          length:"2500-12000mm"
        },
        {
            title: "JSW Steel Cold Rolled Sheet IS 2062:2011 E250Br",
            brand: "Brand: Jindal Steel",
            thickness: "0.4-2mm",
            width: "700-1800mm",
            buttonName: "Purchase now",
            delivery: "Delivery in 2-4 days",
            image: "https://images.ctfassets.net/o0otttl8ele8/2mf3iSpFsm4edsiOtsQLSk/121916c354de98f0c44a31ed261ab8d0/ezgif.com-gif-maker__41_.webp?fit=fill&w=280&h=153&fm=webp",
            length:"2500-12000mm"
          }, {
            title: "JSW Steel Hot Rolled Sheet IS 2062:2011 E250Br",
            brand: "Brand: Jindal Steel",
            thickness: "0.4-2mm",
            width: "700-1800mm",
            buttonName: "Purchase now",
            delivery: "Delivery in 2-4 days",
            image: "https://images.ctfassets.net/o0otttl8ele8/2mf3iSpFsm4edsiOtsQLSk/121916c354de98f0c44a31ed261ab8d0/ezgif.com-gif-maker__41_.webp?fit=fill&w=280&h=153&fm=webp",
            length:"2500-12000mm"
          }, {
            title: "JSW Steel Hot Rolled Sheet IS 2062:2011 E250Br",
            brand: "Brand: Jindal Steel",
            thickness: "0.4-2mm",
            width: "700-1800mm",
            buttonName: "Purchase now",
            delivery: "Delivery in 2-4 days",
            image: "https://images.ctfassets.net/o0otttl8ele8/2mf3iSpFsm4edsiOtsQLSk/121916c354de98f0c44a31ed261ab8d0/ezgif.com-gif-maker__41_.webp?fit=fill&w=280&h=153&fm=webp",
            length:"2500-12000mm"
          },
      ];
    return (
    <div>
    <div class="grid grid-cols-3 grid-rows-2 gap-10 w-full  ">
 {/* <div> */}
 {cardData.map((card,index)=>(
    <Link key={index} to={`/product/${index}`}>
    <CardSheet {...card} />
  </Link>
 ))}

    
    </div>
    </div>
  )
}

export default ColdRolledCatgory