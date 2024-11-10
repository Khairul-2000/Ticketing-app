import TicketCard from "./_componets/TicketCard";

const getTickets = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/Tickets", {
      cache: "no-store",
    });
    return res.json();
  } catch (err) {
    console.log("Failed to get Tickets: ", err);
  }
};

const Dashboard = async () => {
  const { tickets } = await getTickets();

  const uniqueCategories = [
    ...new Set(tickets?.map(({ category }) => category)),
  ];

  return (
    <div className="p-5">
      <h1 className="mb-3 text-center">Dashboard</h1>
      <div>
        {tickets &&
          uniqueCategories?.map((uniqueCategorie, categoryIndex) => (
            <div key={categoryIndex} className="mb-4">
              <h2>{uniqueCategorie}</h2>

              <div className="grid-cols-2 lg:grid xl:grid-cols-4">
                {tickets
                  .filter((ticket) => ticket.category === uniqueCategorie)
                  .map((filterTicket, _index) => (
                    <TicketCard
                      key={_index}
                      id={_index}
                      ticket={filterTicket}
                    />
                  ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Dashboard;
