import { Column1 } from "../InfoSection/InfoElements";
import ListComponents from "../ListComponents";
import { listObjOne } from "../ListComponents/Data";

export const contentObjOne = {
  id: `history`,
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: `About`,
  headline: `HISTORY`,
  description: (
    <>
      Darpan Hindi Radio Group was established in 1992 as a Hindi language
      broadcasting group of MCRA (Mult-Cultural Radio Association). Like Hindi
      group, there are more than 30 different language groups. MCRA has a
      license to operate a radio station under the name of Radio 2000 FM. All
      the language groups of MCRA broadcast their programs on this radio
      station.
      <br /> <br />
      Under this arrangement Hindi broadcasting group is operating with the help
      of selfless volunteers and has been providing an excellent community
      service. No volunteer has ever received any financial payment for their
      efforts to run the program. From time to time , some old members had to
      leave due to their other commitments. New members came and thus the
      community service project is continuing.
      <br /> <br />
      Due to some inter-group conflicts, MCRA had to close its operation in
      1996. Efforts to revive MCRA started soon under the selfless and able
      leadership of Mr. Inoke Fotu Hu'akau. Hindi group gave full support to
      save and revive MCRA.
      <br /> <br />
      As a result of the tireless efforts of many right thinking and hardworking
      people, MCRA was revived and resumed its operations in 1998. Conveners of
      all the language groups were asked to assemble their group members and
      start broadcasting. Hindi group proudly restarted broadcasting of its
      program on every Sunday from 8am to 9am from March 1998.
      <br /> <br />
      Thus Darpan Hindi Radio program is running smoothly now as a great
      community service. To bring Darpan to this stage, all members have been
      working extremely hard on a voluntary basis, overcoming numerous
      difficulties and adversities.
    </>
  ),
  buttonLabel: `Read More`,
  imgStart: false,
  img: require("../../images/svg-2.svg").default,
  alt: `history Photo`,
  dark: false,
  primary: false,
  darkText: true,
  to: "aimsAndObjectives",
};

export const contentObjTwo = {
  id: `aimsAndObjectives`,
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: `About`,
  headline: `AIMS AND OBJECTIVES`,
  description: (
    <ul>
      <ListComponents {...listObjOne} />
    </ul>
  ),
  buttonLabel: `Read More`,
  imgStart: true,
  img: require("../../images/svg-3.svg").default,
  alt: `AIMS AND OBJECTIVES Photo`,
  dark: true,
  primary: true,
  darkText: false,
  to: `structure`,
};

export const contentObjThree = {
  id: `structure`,
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: `About`,
  headline: `STRUCTURE`,
  description: (
    <div>
      This program is run and managed by the financial members of the Hindi
      Broadcasting Group of MCRA A financial member is defined as the one who
      has paid his/her joining fee and the annual membership renewal fee for the
      current financial year.
      <br /> <br />
      All of these members are volunteers and run the radio program without any
      financial benefit.
      <br /> <br />
      The operational structure of the group is as follows: <br />
      <ul style={{ listStyle: "inside", marginLeft: "1.2rem" }}>
        <li>General Body</li>
        <li>Group Convener</li>
        <li>Executive Committee</li>
        <li>Broadcasting Delegates</li>
      </ul>
      <br /> <br />
      <h2>General Body </h2>
      <br />
      All the financial members of the group form the General Body of the group.
      They suggest implement and participate in improving the quality of the
      program. They elect/choose the members of the Executive Committee,
      consisting of 5 members including Group Convener, Secretary and Treasurer
      in the AGM (Annual General Meeting) of the group.
      <br /> <br />
      <h2>Group Convener</h2>
      <br />
      The group has one convener. The convener is chosen from among the current
      financial members of the group. The convener performs the following
      functions:
      <br />
      <ul style={{ listStyle: "inside", marginLeft: "1.2rem" }}>
        <li>
          Co-ordinate activities of the group, including program roster and
          sponsorship.etc
        </li>
        <li>Attend Convenees Meetings conducted by MCRA</li>
        <li>Executive Committee</li>
        <li>
          Convene meetings of the group and exchange information among all
          group's members via periodical reports
        </li>
      </ul>
      <br /> <br />
      <h2>Executive Committee</h2>
      <br />
      The Executive Committee members look after the operation of the group. It
      consists of five members elected from among the financial members of the
      group. They perform various duties such as broadcasting, account keeping,
      collecting community announcement/s and obtaining sponsorship/s etc. All
      decisions are taken in consultation with all the Executive Committee
      members.
      <br /> <br />
      <h3>Current Executive Committee is as follows: </h3>
      <br />
      <table>
        <tbody
          style={{
            display: "flex",
            flexWrap: "nowrap",
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "flex-start",
          }}>
          <tr
            style={{
              display: "flex",
              flexWrap: "nowrap",
              alignItems: "center",
              marginBottom: "2rem",
            }}>
            <td>Convener: </td>
            <td
              style={{
                marginLeft: "1rem",
              }}>
              Dr Pradeep Kumar
            </td>
          </tr>
          <tr
            style={{
              display: "flex",
              flexWrap: "nowrap",
              alignItems: "center",
              marginBottom: "2rem",
            }}>
            <td>Secretary:</td>
            <td
              style={{
                marginLeft: "1.2rem",
              }}>
              Shri Sanjay Sharma
            </td>
          </tr>
          <tr
            style={{
              display: "flex",
              flexWrap: "nowrap",
              alignItems: "center",
            }}>
            <td>Treasurer:</td>
            <td
              style={{
                marginLeft: "1.2rem",
              }}>
              Shri Akhil Verma
            </td>
          </tr>
          <tr
            style={{
              display: "flex",
              flexWrap: "nowrap",
              alignItems: "center",
              marginBottom: "2rem",
            }}>
            <td>Member1:</td>
            <td
              style={{
                marginLeft: "1.2rem",
                marginTop: "2rem",
              }}>
              Shri Virendra Sharma (Shri Prem Arora, Chairman, SVHF is looking
              after Shri Sharma's portfolio while Shri Sharma is not available)
              <br />
            </td>
          </tr>
          <tr
            style={{
              display: "flex",
              flexWrap: "nowrap",
              alignItems: "center",
              marginBottom: "2rem",
            }}>
            <td>Member2:</td>
            <td
              style={{
                marginLeft: "1.2rem",
              }}>
              Shri Ajoy Ghosh
            </td>
          </tr>
          <tr
            style={{
              display: "flex",
              flexWrap: "nowrap",
              alignItems: "center",
            }}>
            <td>Webmaster: </td>
            <td
              style={{
                marginLeft: "1.2rem",
              }}>
              Shri Raj Batra
            </td>
          </tr>
        </tbody>
      </table>
      <br /> <br />
      <h2>Group Treasurer</h2>
      <br />
      The functions of Group Treasurer are as follows: <br />
      <ul style={{ listStyle: "inside", marginLeft: "1.2rem" }}>
        <li>Account keeping</li>
        <li>
          Invoicing, receive sponsorship money, deposit into the bank account
          and issue receipts
        </li>
        <li>
          Organise payments for expenses such as air-time fee to MCRA.
          Monthly/Quarterly/Annual Account report to members
        </li>
      </ul>
      <br /> <br />
      <h2>Group Secretary</h2>
      <br />
      The functions of Group Secretary are as follows: <br />
      <ul style={{ listStyle: "inside", marginLeft: "1.2rem" }}>
        <li>Maintain membership register</li>
        <li>Organise meetings</li>
        <li>Prepare and circulate minutes of the group meetings</li>
      </ul>
      <br /> <br />
      <h2>Broadcasting Team</h2>
      <br />A broadcasting team is chosen from among the members of the Group.
      This broadcasting team is responsible for preparing and compering
      (presenting) the program. The broadcasting team members use a rostering
      system.
      <br /> <br />
    </div>
  ),

  buttonLabel: `Read More`,
  imgStart: false,
  // img: null,
  img: require("../../images/svg-4.svg").default,
  alt: `STRUCTURE Photo`,
  dark: false,
  primary: false,
  darkText: true,
  style: { display: "none" },
  to: `/`,
};
