import "./App.css";
import RevenueCard from "./components/RevenueCard";

function App() {
  return (
    <>
      <RevenueCard
        title={"Amount pending"}
        amount={"92,312.20"}
        orderCount={13}
      />
      {/* <allLearntClasses/> */}
    </>
  );
}
function allLearntClasses() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">
        this is text for tailwind css
      </h1>
      <div className={"justify-between flex "}>
        <div className="bg-red-500 text-left p-5 m-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
          consequuntur commodi dolor corrupti rerum voluptatem excepturi,
          asperiores quia consequatur eaque laboriosam provident odit eveniet
          sunt beatae dolores debitis quasi. Deleniti?
        </div>
        <div className="bg-slate-500 text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          laboriosam doloremque ex sint laudantium mollitia delectus autem
          soluta quam eveniet vel quisquam labore odio odit, laborum tenetur
          consequuntur officiis nisi?
        </div>
        <div className="bg-slate-700 text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
          repellendus dignissimos commodi deleniti accusamus. Suscipit neque
          optio eveniet obcaecati, enim magni quidem repellendus nobis molestias
          earum dolorum cum, totam officiis!
        </div>
      </div>
      <h1 className="text-3xl font-bold underline">Grid in TailwindCss</h1>

      <div className="grid bg-red-400 grid-cols-4 gap-2 p-10">
        <div className="bg-slate-100 rounded-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, ab a
          voluptatibus doloribus provident expedita consectetur quod magni
          aspernatur nesciunt.
        </div>
        <div className="bg-slate-400 rounded-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
          molestias dolorem fugiat beatae, voluptate laboriosam?
        </div>
        <div className="bg-slate-600  rounded-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi placeat
          aut itaque reprehenderit? Adipisci, consectetur delectus dicta debitis
          sunt nostrum!
        </div>
        <div className="bg-slate-700  rounded-lg">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
          obcaecati.
        </div>
      </div>

      <div className="w-80 py-10 text-white bg-slate-500 rounded-lg m-5">
        <div className={"text-left"}>Next Payout</div>
        <div className="flex justify-between">
          <div>RS2,312.23</div>
          <div>23 Orders {">"}</div>
        </div>
        <div className="bg-slate-700 flex justify-between ">
          <div>Next Payment Date:</div>
          <div>Today,4:00PM</div>
        </div>
      </div>

      <div className="grid  md:grid-cols-3 gap-5 grid-cols-1">
        <div className="bg-slate-500 p-20">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt est
          tempore dicta, ducimus cum veniam blanditiis voluptates pariatur
          voluptatem rem.
        </div>
        <div className="bg-slate-500 p-20">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt est
          tempore dicta, ducimus cum veniam blanditiis voluptates pariatur
          voluptatem rem.
        </div>
        <div className="bg-slate-500 p-20">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt est
          tempore dicta, ducimus cum veniam blanditiis voluptates pariatur
          voluptatem rem.
        </div>
      </div>
    </>
  );
}

export default App;
