import inboxsm from "../assets/inbox-sm.svg";
import historysm from "../assets/history-sm.svg";

function Container() {
  return (
    <>
      <div className="flex flex-col gap-4 pb-3 pt-20 mx-1">
        <div className="flex flex-row justify-between pr-5">
          <span className="flex flex-row gap-3">
            <img src={inboxsm} alt="inbox" />
            <p className="capitalize font-medium text-slate-500">recent</p>
          </span>
          <span className="px-2 py-0 rounded-xl text-sm text-white bg-red-600">
            1
          </span>
        </div>
        <div className="flex flex-row justify-between pr-5">
          <span className="flex flex-row gap-3">
            <img src={historysm} alt="" />
            <p className="capitalize font-medium text-slate-500">history</p>
          </span>
        </div>
        <div className="flex flex-row justify-between pr-5">
          <p className="capitalize font-medium text-slate-500">drafts</p>
          <span className="px-2 py-0 rounded-xl text-sm text-white bg-red-600">
            3
          </span>
        </div>
        <div>
          <p>trash</p>
        </div>
      </div>
    </>
  );
}

export default Container;
