import { Footer, Navbar } from "@/layout"
import { ClubMembers, GoldNews, TipsClub } from "@/components"
import { Tab, TabList, TabPanel, Tabs } from "react-tabs"
import './club.scss'

const Club = () => {
  return (
    <>
      <Navbar />
      <Tabs>
        <TabList>
          <Tab>اخبار الذهب</Tab>
          <Tab>توصيات الاستاذ صلاح</Tab>
          <Tab> اعضاء النادى</Tab>
        </TabList>

        <TabPanel>
          <GoldNews />
        </TabPanel>
        <TabPanel>
          <TipsClub />
        </TabPanel>
        <TabPanel>
          <ClubMembers/>
        </TabPanel>
      </Tabs>
      <Footer />
    </>
  )
}

export default Club