import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from 'react';

const BoxAnim = (props:any) => {
    const control = useAnimation()
    const [ref, inView] = useInView()
  
    useEffect(() => {
      if (inView) {
        setTimeout(function() { control.start("visible"); }, typeof props.offset === "number" ? props.offset : 0);
        
      } else {
        control.start("hidden");
      }
    }, [control, inView]);
  
    const boxVariant:any  = {
      visible: { opacity: 1, scale: 1, transition: { duration: 0.6}},
      hidden: { opacity: 0, scale: 0 },
    }
    return(
      <motion.div variants={boxVariant } ref={ref} initial="hidden" animate={control} className={props.className}>
        {props.children}
      </motion.div>
    )
  }
  const SpanAnim = (props:any) => {
    const control = useAnimation()
    const [ref, inView] = useInView()
  
    useEffect(() => {
      if (inView) {
        setTimeout(function() { control.start("visible"); }, typeof props.offset === "number" ? props.offset : 0);
        
      } else {
        control.start("hidden");
      }
    }, [control, inView]);
  
    const boxVariant:any  = {
      visible: { opacity: 1, scale: 1, transition: { duration: 0.3 }},
      hidden: { opacity: 0, scale: 0 },
    }
    return(
      <motion.span variants={boxVariant } ref={ref} initial="hidden" animate={control} className={props.className}>
        {props.children}
      </motion.span>
    )
  }

export {BoxAnim, SpanAnim}