import React from 'react';
import church from '../Images/አክሱም ጺዮን.jpg';

function ChurchPage() {
  return (

    <div className='mx-20 py-8'>
      <div className='flex flex-row text-3x1 pb-8'>
        <button><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
        </svg>
        </button>
        <div className='pl-4'>
          <h2 className='text-3x1 font-bold'>History</h2>
        </div>
      </div>
      <hr />

      <div className='text-4xl text-center font-bold mb-4 pt-8'>
        History
      </div>

      <div className='flex flex-col lg:flex-row'>
        <div className='lg:w-1/2 p-4'>
          <h1 className='text-3xl text-[#336699] font-bold mb-4 text-center'> ከደብረ ጺዮን ወደ አክሱም ጺዮን | ክንፉ አሰፋ
          </h1>
          <p>መቀሌ ለደበቀቻቸው “ጀግኖች” ባለ ውለታ ናቸው። ከዚህም በላይ ይገባቸዋል የሚሉ አሉ። እምነት ለነሱ ኢምንት ነው። ሃይማኖት ደግሞ ፖለቲካ። ልብ ያለው ፈጣሪን ያስባል። ይሉኝታ ያለው አምላኩን ይፈራል። ህሊና ያለው ደግሞ የእግዚአብሄርን ስም ይጠራል። ይህ ሁሉ የሌለው ግን በባዶነቱ ዝም ብሎ ይቁነጠነጣል። ይህ አዲስ አይደለም። ራስ እንጂ ጭንቅላት ከሌለው ሰው ተቃራኒው ቢፈጸን ነበር የሚደንቀው።
            አንዱ ሰው ጓደኛውን ይጠይቀዋል። “እስኪ ለአፍታ አስበው በጫቃ መሃል ውስጥ ነህ። አንበሳ ሊበላህ አሰፍስፎ ይጠብቅሃል። ምን ታደርጋለህ?”
            ልጁ መለሰ። “ማሰብ አቆማለሁ!” እያወራን ያለነው በአንበሶች ተከብበው ማሰብ ስላቆሙ ሰዎች ነው።
            ዶ/ር ደብረጺዮን ገብረሚካዔል የቤተ ክርስትያንዋን ካባ ይልበሱ። ባለ ልዩ ማዕረጉን አክሊልም ይድፉ። ይህ የሆነው ከንሰሃ በፊት ይሁን ወይንስ ከንስሃ በኋላ ግልጽ አልሆነልንም። ከካይሮ እስከ ቡሳን፤ ከባንኮክ እስከ ዱባይ፣ ከናይሮቢ እስከ ቬጋስ በጉዞ ላይ የፈጸሙዋቸው የዝሙት ነውሮች ለዚህ ሽልማት ሊያበቁ እንደማይችሉ ቤተ ክርስትያን ሳታውቅ ቀርታ አይደለም። ከቶውንም ዝሙት እና ሌብነት ለተክሊል የሚያበቁ ጀብዶች እንደማይሆኑ ግልጽ ነው።
            አክሱም ጺዮን በኢትዮጵያ ክርስትና ታሪክ ውስጥ ትልቁን ስፍራ ትይዛለች። ሰለሞናዊው ስርወ መንግስት ንግስና የሚጸናውም በዚያ ስፍራ ነው። የታሪክ መዛግብት እንደሚነግሩን፤ ሁለት መቶ ሃያ አምስቱ የሰለሞናዊ ነገስታት ከንግስናቸው በኋላ ወደ አክሱም ጺዮን መሄድ እና ስልጣናቸውን ማጽናት ግድ ነው።

          </p>
        </div>
        <div className='lg:w-1/2 p-4'>
          <h1 className='text-3xl text-[#336699] font-bold mb-4 text-center'>አክሱም ጽዮን</h1>
          <div className=''>
            <img src={church} alt="አክሱም ጺዮን" className=" w-[100%] h-[100%]" />
          </div>
        </div>
      </div>
      <div className='w-full py-8'>
        <p>ችግሩ ከአልባሳቱ ላይ አይደለም። ስብዕናው የወረደ፤ በሙስና እና በዝሙት የሚከሰስን አንድ የፖለቲካ ድርጅት መሪ፤ በዚህ ታሪካዊ ወቅት፣ በዚህች ታሪካዊ ስፍራ ላይ ያላግባብ ከፍታ ላይ ማስቀመጡ የማድረጉ እንደምታ ነው። ቤተ-ክርስትያንዋን ለማርከስ ከመሞከር በላይ ይህ ጉዳይ ትልቅ ትርጉም አለው።
          ጠባብ የክልል አስተሳሰብ ይዘው መጡ። ሰላማዊ ሕዝብ ላይ እንደ ማሽላ ዘሩት። በሲስተሙ ሰው ሲባላ እነሱ ግን ኖሩበት። በመጨረሻ የለኮሱት እሳት ራሳቸውኑ መብላት ሲጀምር፤ ዳግም መቀሌ ላይ ተሰበሰቡ። ገዳዩም፣ ዘራፊውም፣ ቄሱም፣ ጳጳሱም፣ …. መክረው የመጀመርያ የሆነውን ንግስና እውን አደረጉት።
          እርግጥ ነው ነፍጥ አንጠንጥሎ እንደፈለጉ የማድረጉ ሰዓት አሁን ረፍሮበታል። በዳዩ፣ ከሳሹ፤ ምስክሩ እና ዳኛው አንድ የነበረበት ዘመን እንደ ዋዛ አልፏል። የፖለቲካ ቁማራቸውን በቤተ-እምነትን ውስጥ ይዞ ብቅ ማለት ግን ወንድ ልጅን አስገድዶ ከመድፈር የላቀ ወንጀል መሆኑን ለአፍታም መዘንጋት የለብንም።
          አይቶ የማይመለከት፣ ረግጦ የማይቆምና ይዞ የማይጨበጥ የዥዋዥዌ ፖለቲካውን ባናቱ ላይ ተሸክሞ ሲቁነጠነጥ የነበረው ሰውዬ፤ ዛሬ ወደ አክሱም ጺዮን ብቅ ብሏል። አካሄዱ ረጋ ያለ የኤሊ ጉዞ ቢሆን ኖሮ ከጀርባ ያዘለውን ጉድ በጥርጣሬ የሚያየው አልነበረም። ሩጫው የብርሃን ፍጥነት ሆነና ሕዝበ አዳምን “ጉድ” ማሰኘቱ አልቀረም።
          አሁን ለታ ቤተ-ክርስትያንዋ ዶ/ር አብይ እና ባለቤታቸውን ጠርታ የክብር ካባ አልብሳ ሸልማቸው ነበር። አግባብ ያለው ሽልማት። በሁለቱ ሲኖዶስ እርቅ ላይ ላበረከቱት አስተዋጽኦ ነበር የተሸለሙት። ዶር ደብረ ጺዮን የግፈኞች እና ሌቦችን እየተንከባከቡ በመቀሌ ዋሻ ከማቆየት ውጭ። ተጠርጣሪን አሳልፌ አልሰጥም ከማለት ውጭ የትኛውን ጽድቅ ስራ ሰርተው ለዚህ ክብር እንደበቁ ግልጽ አይደለም።
          የማሌሊት መጥምቀ-ዮሃንስ፣ የአልባንያ ኮምኒዝም ሃዋርያ፣ የሂትለሩ ጎብልስ ደቀ መዝሙር ናቸው ደብረጺዮን። በርዕሰ አድባራት ፅዮን ማርያም በር ላይ እንኳ ለመድረስ ይዳፈራሉ ብሎ ማሰብ አይቻልም። ጽዮን ማርያም ታሪካዊ ናት። ኢትዮጵያ ክርስትናን ለመጀመሪያ ይዞ በገባው በአቡነ ሰላማ ዘመን የተገነባች ጥንታዊ ቤ/ክርስቲያን። አስርቱን የፈጣሪ ትእዛዛት የያዘው የሙሴ ጽላት በሚገኝባት። በሃይማኖት ሸፋን የፖለቲካ ጨዋታ ለመጫወት መሞከሩ አንድ ነገር ነው። ገና መዳህ ሳይጀምር በማርክሲዝም ሌኒንዝም ርዕዮት ደደቢት በረሃ ለተጠመቀ ሰው የተክሊል ቆብ መጫን፤ ከፖለቲካ ውጭ ሌላ ትርጉም አይሰጠውም።</p>

      </div>
      <div className='flex flex-col lg:flex-row'>
      <div className='lg:w-1/2 p-4'>
          <h1 className='text-3xl text-[#336699] font-bold mb-4 text-center'>አክሱም ጽዮን</h1>
          <div className=''>
            <img src={church} alt="Image" className=" w-[100%] h-[100%]" />
          </div>
        </div>
        <div className='lg:w-1/2 p-4'>
          <h1 className='text-3xl text-[#336699] font-bold mb-4 text-center'> ከደብረ ጺዮን ወደ አክሱም ጺዮን | ክንፉ አሰፋ
          </h1>
          <p>መቀሌ ለደበቀቻቸው “ጀግኖች” ባለ ውለታ ናቸው። ከዚህም በላይ ይገባቸዋል የሚሉ አሉ። እምነት ለነሱ ኢምንት ነው። ሃይማኖት ደግሞ ፖለቲካ። ልብ ያለው ፈጣሪን ያስባል። ይሉኝታ ያለው አምላኩን ይፈራል። ህሊና ያለው ደግሞ የእግዚአብሄርን ስም ይጠራል። ይህ ሁሉ የሌለው ግን በባዶነቱ ዝም ብሎ ይቁነጠነጣል። ይህ አዲስ አይደለም። ራስ እንጂ ጭንቅላት ከሌለው ሰው ተቃራኒው ቢፈጸን ነበር የሚደንቀው።
            አንዱ ሰው ጓደኛውን ይጠይቀዋል። “እስኪ ለአፍታ አስበው በጫቃ መሃል ውስጥ ነህ። አንበሳ ሊበላህ አሰፍስፎ ይጠብቅሃል። ምን ታደርጋለህ?”
            ልጁ መለሰ። “ማሰብ አቆማለሁ!” እያወራን ያለነው በአንበሶች ተከብበው ማሰብ ስላቆሙ ሰዎች ነው።
            ዶ/ር ደብረጺዮን ገብረሚካዔል የቤተ ክርስትያንዋን ካባ ይልበሱ። ባለ ልዩ ማዕረጉን አክሊልም ይድፉ። ይህ የሆነው ከንሰሃ በፊት ይሁን ወይንስ ከንስሃ በኋላ ግልጽ አልሆነልንም። ከካይሮ እስከ ቡሳን፤ ከባንኮክ እስከ ዱባይ፣ ከናይሮቢ እስከ ቬጋስ በጉዞ ላይ የፈጸሙዋቸው የዝሙት ነውሮች ለዚህ ሽልማት ሊያበቁ እንደማይችሉ ቤተ ክርስትያን ሳታውቅ ቀርታ አይደለም። ከቶውንም ዝሙት እና ሌብነት ለተክሊል የሚያበቁ ጀብዶች እንደማይሆኑ ግልጽ ነው።
            አክሱም ጺዮን በኢትዮጵያ ክርስትና ታሪክ ውስጥ ትልቁን ስፍራ ትይዛለች። ሰለሞናዊው ስርወ መንግስት ንግስና የሚጸናውም በዚያ ስፍራ ነው። የታሪክ መዛግብት እንደሚነግሩን፤ ሁለት መቶ ሃያ አምስቱ የሰለሞናዊ ነገስታት ከንግስናቸው በኋላ ወደ አክሱም ጺዮን መሄድ እና ስልጣናቸውን ማጽናት ግድ ነው።

          </p>
        </div>
        
      </div>
    </div>
  );
}

export default ChurchPage;
