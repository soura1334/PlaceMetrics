import TableCell from "./TableCell";
import TableHeading from "./TableHeading";

type CompanyData = {
  id: string;
  name: string;
  sector: string;
  type: string;
  totalOffers: number;
  logo: string;
};

const companies: CompanyData[] = [
  {
    id: "1",
    name: "Google",
    sector: "Technology",
    type: "Product",
    totalOffers: 45,
    logo: "🔵",
  },
  {
    id: "2",
    name: "Microsoft",
    sector: "Technology",
    type: "Product",
    totalOffers: 38,
    logo: "🟦",
  },
  {
    id: "3",
    name: "Amazon",
    sector: "E-Commerce",
    type: "Product",
    totalOffers: 42,
    logo: "🟠",
  },
  {
    id: "4",
    name: "Goldman Sachs",
    sector: "Finance",
    type: "Service",
    totalOffers: 28,
    logo: "⚪",
  },
  {
    id: "5",
    name: "Stripe",
    sector: "FinTech",
    type: "Startup",
    totalOffers: 15,
    logo: "🟣",
  },
  {
    id: "6",
    name: "Airbnb",
    sector: "Travel",
    type: "Product",
    totalOffers: 20,
    logo: "🔴",
  },
  {
    id: "7",
    name: "Meta",
    sector: "Technology",
    type: "Product",
    totalOffers: 35,
    logo: "🔵",
  },
  {
    id: "8",
    name: "Netflix",
    sector: "Entertainment",
    type: "Product",
    totalOffers: 18,
    logo: "🔴",
  },
];

export default function CompanyTable() {
  return (
    <table className="w-full border rounded-lg">
      <thead>
        <tr>
          <TableHeading text="Company" />
          <TableHeading text="Sector" />
          <TableHeading text="Type" />
          <TableHeading text="Total Offers" />
          <TableHeading text="Actions" />
        </tr>
      </thead>
      <tbody>
        {companies.map((data, idx) => {
          return (
            <tr key={data.id}>
              <TableCell text={data.logo + " " + data.name} />
              <TableCell text={data.sector} />
              <TableCell text={data.type}/>
              <TableCell text={data.totalOffers.toString()} />
              <TableCell>
                <button className="mr-10">Edit</button>
                <button >View Details</button>
              </TableCell>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
