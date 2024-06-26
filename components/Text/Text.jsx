import React from 'react'

const Text = ({
    color,
    fontFamily,
    fontSize,
    fontWeight,
    lineHeight,
    textAlign,
    textDecoration,
    textTransform,
    letterSpacing,
    wordSpacing,
    textIndent,
    textShadow,
    textOverflow,
    whiteSpace,
    overflowWrap,
    direction,
    content,
}) => {
  console.log( typeof fontSize)
  return (
    
      <div style={{
      fontSize:`${fontSize}`,
  color: `${color}`,
  fontfamily: `${fontFamily}`,
  // fontsize: `${fontSize}`,
  fontweight: `${fontWeight}`,
  lineheight: `${lineHeight}`,
  textalign: `${textAlign}`,
  textdecoration: `${textDecoration}`,
  texttransform: `${textTransform}`,
  letterspacing: `${letterSpacing}`,
  wordspacing: `${wordSpacing}`,
  textindent: `${textIndent}`,
  textshadow: `${textShadow}`,
  textoverflow: `${textOverflow}`,
  whitespace: `${whiteSpace}`,
  overflowwrap: `${overflowWrap}`,
  direction: `${direction}`,
  content: `${content}`,
}
}>{content}</div>
    
    
  )
}

export default Text
