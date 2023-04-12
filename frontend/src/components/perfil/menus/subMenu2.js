import { useRouter } from "next/router";
import Link from "next/link";

export default function SubMenu2(props) {
  const router = useRouter();
  const path = router.pathname;
  const select = "-mb-px border-b border-current p-4 text-pink-600";
  const normal =
    "-mb-px border-b border-transparent p-4 dark:text-white hover:text-pink-600";

  return (
    <nav class="flex border-b border-gray-100 text-sm font-medium">
      <div
        onClick={(e) => props.setHover([true, false, false, false])}
        class={props.hover[0] ? select : normal}
      >
        Bronze
      </div>

      <div
        onClick={(e) => props.setHover([false, true, false, false])}
        class={props.hover[1] ? select : normal}
      >
        Silver
      </div>

      <div
        onClick={(e) => props.setHover([false, false, true, false])}
        class={props.hover[2]  ? select : normal}
      >
        Gold
      </div>

      <div
        onClick={(e) => props.setHover([false, false, false, true])}
        class={props.hover[3]  ? select : normal}
      >
        Platinum
      </div>
    </nav>
  );
}
