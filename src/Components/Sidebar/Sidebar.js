import React from 'react';
import './Sidebar.scss';
import 'styles/colors.scss';
import SidebarItem from './SidebarItem/SiderbarItem';
import { 
  PersonOutlineRounded, 
  PieChartRounded, 
  ThumbUpRounded, 
  SmsRounded,
  CalendarTodayRounded,
  MessageRounded,
  BarChartRounded,
} from '@material-ui/icons';

class Sidebar extends React.Component {
  myHealthTabsName = "My Health";
  myHealthTabs = [
    { title: "Diagnosis", href: "/diagnosis", icon: PersonOutlineRounded },
    { title: "Data", href: "/data", icon: PieChartRounded },
    { title: "Advice", href: "/advice", icon: ThumbUpRounded },
    { title: "Chat", href: "/chat", icon: SmsRounded }
  ]

  myHistoryTabName = "My History";
  myHistoryTabs = [
    { title: "Visits", href: "/visits", icon: CalendarTodayRounded },
    { title: "Comments", href: "/comments", icon: MessageRounded },
    { title: "Analytics", href: "/analytics", icon: BarChartRounded },
  ]

  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    return (
      <div
        style={(this.props.open) ? { display: "flex" } : {}}
        className="bg-main flex-grow w-full h-full lg:w-1/4 xl:w-1/5 absolute pt-20 hidden lg:flex z-40 overflow-y-auto"
      >
        <div className="w-full px-8 py-2 lg:py-8">
          <div className="flex flex-grow md:w-3/4 lg:w-3/4 xl:w-4/5">
            <div className="flex md:hidden relative w-full mb-6">
              <input
                id="searchall"
                className="shadow-xl w-full h-12 text-base transitions-colors duration-100 ease-in-out outline-none text-gray-600 placeholder-gray-600 rounded-lg py-2 pr-4 pl-10 block appearance-none leading-normal ds-input"
                placeholder="Search..."
              ></input>
              <div className="pointer-events-none absolute inset-y-0 left-0 pl-4 flex items-center">
                <svg className="fill-current pointer-events-none text-gray-600 w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"></path></svg>
              </div>
            </div>
          </div>
          <SidebarItem title={this.myHealthTabsName} links={this.myHealthTabs} />
          <div className="my-6">
            <SidebarItem title={this.myHistoryTabName} links={this.myHistoryTabs} />
          </div>
        </div>
      </div>
    )
  }
}

export default Sidebar