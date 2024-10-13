import * as React from "react";

let hasStarted = false;

export const Hamburguer = React.forwardRef(({
  onOpen = (()=>{}),
  onClose = (()=>{}),
  animationTime = 200, //in milisseconds
}, ref) => {

  let [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(()=>{
    if(!hasStarted)
      return hasStarted = true, undefined;
    if(isOpen) onOpen();
    else onClose();
  }, [isOpen]);

  const transition = `
    transform ${animationTime}ms cubic-bezier(0.77, 0, 0.175, 1),
    top ${animationTime}ms cubic-bezier(0.77, 0, 0.175, 1),
    opacity ${animationTime}ms cubic-bezier(0.77, 0, 0.175, 1)
  `;

  return (
    <div className="hamburguer" onClick={()=>setIsOpen(s => !s)} ref={ref}>
      <div className="bar" style={{
        transition,
        top: isOpen? `11px` : `0px`,
        transform: isOpen? `rotate(45deg)` : 'rotate(0deg)',
      }}/>
      <div className="bar" style={{
        transition,
        opacity: isOpen? `0` : `1`
      }}/>
      <div className="bar" style={{
        transition,
        top: isOpen? `-13px` : `0px`,
        transform: isOpen? `rotate(-45deg)` : 'rotate(0deg)',
      }}/>
    </div>
  );
});