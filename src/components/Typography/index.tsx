import { HTMLAttributes, ReactNode } from "react";

export type TypographyTypes = {
  children: ReactNode;
  className?: string;
} & HTMLAttributes<HTMLHeadElement>

export type ParagraphTypes = {
  children: ReactNode;
  className?: string;
  isLight?: boolean;
} & HTMLAttributes<HTMLParagraphElement>

const h1 = ({ children, className, ...props }: TypographyTypes) => {
  return (
    <div>
      <h1 className="srOnly">{children}</h1>
      <h1 className={`headings h1 ${className}`} {...props}>
        {children}
      </h1>
    </div>
  )
}

const h2 = ({ children, className, ...props }: TypographyTypes) => {
  return (
    <div>
      <h2 className="srOnly">{children}</h2>
      <h2 className={`headings ${className}`} {...props}>
        {children}
      </h2>
    </div>
  )
}

const h3 = ({ children, className, ...props }: TypographyTypes) => {
  return (
    <div>
      <h3 className="srOnly">{children}</h3>
      <h3 className={`headings ${className}`} {...props}>
        {children}
      </h3>
    </div>
  )
}

const h4 = ({ children, className, ...props }: TypographyTypes) => {
  return (
    <div>
      <h4 className="srOnly">{children}</h4>
      <h4 className={`headings ${className}`} {...props}>
        {children}
      </h4>
    </div>
  )
}

const h5 = ({ children, className, ...props }: TypographyTypes) => {
  return (
    <div>
      <h5 className="srOnly">{children}</h5>
      <h5 className={`headings h5 ${className}`} {...props}>
        {children}
      </h5>
    </div>
  )
}

const p = ({ children, className, isLight, ...props }: ParagraphTypes) => {
  return isLight ? (
    <div>
      <p className="srOnly">{children}</p>
      <p className={`paragraph light ${className}`} {...props}>
        {children}
      </p>
    </div>
  ) : (
    <div>
      <p className="srOnly">{children}</p>
      <p className={`paragraph ${className}`} {...props}>
        {children}
      </p>
    </div>
  )
}

export default function Typography() {
  return (
    <div></div>
  )
}

Typography.h1 = h1;
Typography.h2 = h2;
Typography.h3 = h3;
Typography.h4 = h4;
Typography.h5 = h5;
Typography.p = p;
