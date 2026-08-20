import type { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";
import Link from "next/link";
import styles from "./Button.module.css";

type Variant = "solidLemon" | "solidRosewood" | "outlineLemon" | "outlineDark";

type CommonProps = {
  variant?: Variant;
  className?: string;
};

type AsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type AsLink = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type ButtonProps = AsButton | AsLink;

export default function Button({ variant = "solidLemon", className = "", ...props }: ButtonProps) {
  const cls = `${styles.btn} ${styles[variant]} ${className}`;

  if ("href" in props && props.href) {
    const { href, ...rest } = props as AsLink;
    return (
      <Link href={href} className={cls} {...rest}>
        {props.children}
      </Link>
    );
  }

  const { ...rest } = props as AsButton;
  return (
    <button className={cls} {...rest}>
      {props.children}
    </button>
  );
}
