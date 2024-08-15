import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

export default function TypedComponent() {
  // إنشاء مرجع لربطه بالعنصر الذي سيتم تطبيق Typed.js عليه

  const typedElement = useRef(null);

  useEffect(() => {
    // إعداد خيارات مكتبة Typed.js
    if (typedElement.current) {
      let options = {
        strings: ["mahmoud ramadan"],
        typeSpeed:  150,
        backSpeed:  50,
        backDelay:  1000,
        startDelay:  500,
        cursorChar: '',

        loop:  true,
      };
  
      // تفعيل Typed.js على العنصر المرتبط بالمرجع
      const typed = new Typed(typedElement.current, options);
  
      // تنظيف التأثير عند تفكيك المكون لتجنب تسريبات الذاكرة
      return () => {
        typed.destroy();
      };
    }
  }, []);
  return (
    <div>
          <h1 ref={typedElement} className='text-transparent my-5 bg-clip-text bg-cover bg-center'></h1>
    </div>
  );
}
