// const line = document.getElementById('animated-line');
//     const canvas = document.getElementById('line-canvas');
    
//     function updateLine() {
//       const scrollPercent = window.scrollY / (document.body.scrollHeight - window.innerHeight);
//       const width = canvas.clientWidth;
//       const height = canvas.clientHeight;
      
//       const maxScroll = document.body.scrollHeight - window.innerHeight;
//       const scrollDistance = window.scrollY;
      
//       const totalVerticalDistance = height * 2.5;
//       const lineProgress = scrollPercent;
      
//       let pathData = '';
//       const segments = 300;
//       const numLoops = 6; 
      
//       for (let i = 0; i <= segments; i++) {
//         const progress = (i / segments) * lineProgress;
        
//         const angle = progress * Math.PI * 2 * numLoops;
//         const loopRadius = width * 0.1;
 
//         const x = width * 0.5 + Math.cos(angle) * loopRadius;
        
//         const baseY = progress * totalVerticalDistance;
//         const y = baseY + Math.sin(angle) * loopRadius;
        
//         if (i === 0) {
//           pathData = `M ${x} ${y}`;
//         } else {
//           const prevProgress = ((i - 1) / segments) * lineProgress;
//           const prevAngle = prevProgress * Math.PI * 2 * numLoops;
//           const prevBaseY = prevProgress * totalVerticalDistance;
//           const prevX = width * 0.5 + Math.cos(prevAngle) * loopRadius;
//           const prevY = prevBaseY + Math.sin(prevAngle) * loopRadius;
          
//           const cpX = (x + prevX) / 2;
//           const cpY = (y + prevY) / 2;
          
//           pathData += ` Q ${cpX} ${cpY} ${x} ${y}`;
//         }
//       }
      
//       line.setAttribute('d', pathData);
//     }
    
//     window.addEventListener('scroll', updateLine);
//     window.addEventListener('resize', updateLine);
    
//     updateLine();