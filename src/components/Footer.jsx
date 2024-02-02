import "../css/style.css";
export default function Footer({ total, finished }) {
  return (
    <div className="footer">
      Total : {total} <span className="tab" /> Finished : {finished}
    </div>
  );
}
