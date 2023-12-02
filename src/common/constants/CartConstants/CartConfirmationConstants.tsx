import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { CartConfirmationItem } from "@/common/types";
import { Routes } from "@/common/constants";
import commonStyles from "@/styles/Common.module.scss";

export const cartConfirmationItems: CartConfirmationItem[] = [
  { name: "I agree with sending an Marketing and newsletter emails. No spam, promised!", id: uuidv4() },
  {
    name: (
      <span>
        I agree with our&nbsp;
        <Link className={commonStyles.activeLink} to={Routes.HOME}>
          terms and conditions
        </Link>
        &nbsp;and&nbsp;
        <Link className={commonStyles.activeLink} to={Routes.HOME}>
          privacy policy
        </Link>
        .
      </span>
    ),
    id: uuidv4(),
  },
];
