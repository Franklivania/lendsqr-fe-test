import { User } from "@/types";
import Typography from "../Typography";


export default function GeneralDetails({ user }: { user: User }) {

  const addCommas = (amount: string): string => {
    return amount.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <div id="general-details">
      <section className="section-definer">
        <Typography.h4>Personal Information</Typography.h4>

        <div className="section-content">
          <span>
            <small>FULLNAME</small>
            <Typography.h4>{user.fullName}</Typography.h4>
          </span>
          <span>
            <small>PHONE NUMBER</small>
            <Typography.h4>{user.personalInfo.phoneNumber}</Typography.h4>
          </span>
          <span>
            <small>EMAIL ADDRESS</small>
            <Typography.h4>{user.personalInfo.emailAddress}</Typography.h4>
          </span>
          <span>
            <small>BVN</small>
            <Typography.h4>{user.personalInfo.bvn}</Typography.h4>
          </span>
          <span>
            <small>GENDER</small>
            <Typography.h4>{user.personalInfo.gender}</Typography.h4>
          </span>
          <span>
            <small>MARITAL STATUS</small>
            <Typography.h4>{user.personalInfo.maritalStatus}</Typography.h4>
          </span>
          <span>
            <small>CHILDREN</small>
            <Typography.h4>{user.personalInfo.children}</Typography.h4>
          </span>
          <span>
            <small>TYPE OF RESIDENCE</small>
            <Typography.h4>{user.personalInfo.typeOfResidence}</Typography.h4>
          </span>
        </div>
      </section>
      <section className="section-definer">
        <Typography.h4>Education and Employment</Typography.h4>

        <div className="section-content">
          <span>
            <small>LEVEL OF EDUCATION</small>
            <Typography.h4>{user.employment.levelOfEducation}</Typography.h4>
          </span>
          <span>
            <small>EMPLOYMENT STATUS</small>
            <Typography.h4>{user.employment.employmentStatus}</Typography.h4>
          </span>
          <span>
            <small>SECTOR OF EMPOYMENT</small>
            <Typography.h4>{user.employment.sectorOfEmployment}</Typography.h4>
          </span>
          <span>
            <small>DURATION OF EMPLOYMENT</small>
            <Typography.h4>{user.employment.durationOfEmployment}</Typography.h4>
          </span>
          <span>
            <small>OFFICE EMAIL</small>
            <Typography.h4>{user.employment.officeEmail}</Typography.h4>
          </span>
          <span>
            <small>MONTHLY INCOME</small>
            <Typography.h4>₦{addCommas(user.employment.monthlyIncome)}</Typography.h4>
          </span>
          <span>
            <small>LOAN REPAYMENT</small>
            <Typography.h4>{user.employment.loanRepayment}</Typography.h4>
          </span>
        </div>
      </section>
      <section className="section-definer">
        <Typography.h4>Socials</Typography.h4>

        <div className="section-content">
          <span>
            <small>TWITTER</small>
            <Typography.h4>{user.socials.twitter}</Typography.h4>
          </span>
          <span>
            <small>FACEBOOK</small>
            <Typography.h4>{user.socials.facebook}</Typography.h4>
          </span>
          <span>
            <small>INSTAGRAM</small>
            <Typography.h4>{user.socials.instagram}</Typography.h4>
          </span>
        </div>
      </section>
      <section className="section-definer">
        <Typography.h4>Guarantor</Typography.h4>

        <div className="section-content">
          <span>
            <small>FULLNAME</small>
            <Typography.h4>{user.guarantor.fullName}</Typography.h4>
          </span>
          <span>
            <small>PHONE NUMBER</small>
            <Typography.h4>{user.guarantor.phoneNumber}</Typography.h4>
          </span>
          <span>
            <small>EMAIL ADDRESS</small>
            <Typography.h4>{user.guarantor.emailAddress}</Typography.h4>
          </span>
          <span>
            <small>RELATIONSHP</small>
            <Typography.h4>{user.guarantor.relationship}</Typography.h4>
          </span>
        </div>
      </section>
      <section className="section-definer">
        {/* <Typography.h4>Guarantor</Typography.h4> */}

        <div className="section-content">
          <span>
            <small>FULLNAME</small>
            <Typography.h4>{user.guarantor.fullName}</Typography.h4>
          </span>
          <span>
            <small>PHONE NUMBER</small>
            <Typography.h4>{user.guarantor.phoneNumber}</Typography.h4>
          </span>
          <span>
            <small>EMAIL ADDRESS</small>
            <Typography.h4>{user.guarantor.emailAddress}</Typography.h4>
          </span>
          <span>
            <small>RELATIONSHP</small>
            <Typography.h4>{user.guarantor.relationship}</Typography.h4>
          </span>
        </div>
      </section>
    </div>
  )
}
