// export const Person = ({ person }) => ();
export const Person = ({ name, age, sex, isMarried = false, partnerName }) => (
  <section className="Person">

     <h2 className="Person__name">{`My name is ${name}`}</h2>

    <p className="Person__age">{age && `I am ${age}`}</p>

    <p className="Person__partner">
    {(() => {
        if (!isMarried) return 'I am not married';
        return sex === 'm'
          ? `${partnerName} is my wife`
          : `${partnerName} is my husband`;
      })()}
    </p>
  </section>
);
