import Header from "../components/header/Header";
import SearchForm from "../components/seacrhForm/SearchForm";
import Categories from "../components/categories/Categories";
import Card from "../components/card/Card";

function Home() {
  return (
    <div>
      <Header />
      <SearchForm />
      <div className="w-4/5 mx-auto flex">
        <Categories />
        <Card>
          <span className="about__card-icon"> Icon</span>

          <div className="card__info">
            <h5>title </h5>

            <small>Description </small>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default Home;
