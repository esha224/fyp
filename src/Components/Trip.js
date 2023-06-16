import "./TripStyles.css";
import TripData from "./TripData";

function Trip() {
  return (
    <div className="trip">
      <h1>Free Services</h1>
      <p>
        Pak Suzuki formed into an association and business operation that
        declares the business as a separate, legal entity guided by a group of
        officers known as the board of directors.
      </p>
      <div className="tripcard">
        <TripData
          heading="First Free Service"
          text="For New Swift, First free service is due at 1,000 Km or 1 month whichever comes first (Mandatory)

          First free service is due at 1000 Km or 1.5 months. However, this facility can be availed upto 1500 Km or 3 months whichever comes first (except New Swift).
          The First Free Service includes items as recommended in maintenance schedule."
        />
        <TripData
          heading="Second Free Service"
          text="For New Swift, 3,000 Kms or 3 months whichever comes first (Mandatory)

          Second Free Service is due at 5,000 Km or 3 months. However, this facility can be availed upto 6 Months (not exceeding 5,000 Km) (except New Swift).
          The Second Free Service includes Free Inspection and Labor free service as recommended in maintenance schedule.
          The vehicle maintained by Suzuki Authorized Dealers at 1,000 Km is eligible to avail 5,000 Km inspection and Labor Free Service."
        />
      </div>
    </div>
  );
}

export default Trip;
