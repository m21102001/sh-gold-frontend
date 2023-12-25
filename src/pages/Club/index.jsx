import { Footer, Navbar } from "@/layout"
import { GoldNews, TipsClub } from "@/components"
import { Tab, TabList, TabPanel, Tabs } from "react-tabs"
import './club.scss'

const Club = () => {
  return (
    <>
      <Navbar />
      <Tabs>
        <TabList>
          <Tab>اخبار الذهب</Tab>
          <Tab>نصايح الاستاذ صلاح</Tab>
        </TabList>

        <TabPanel>
          <GoldNews />
        </TabPanel>
        <TabPanel>
          <TipsClub />
        </TabPanel>
      </Tabs>
      <Footer />
    </>
  )
}

export default Club