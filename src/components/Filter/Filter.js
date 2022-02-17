import { connect } from "react-redux";
import contactsAction from "../../redux/contactsAction";
import { FilterForm, FilterInput, FilterBtn } from "./Filter.styled";
import { MdSearch } from "react-icons/md";

const Filter = ({ value, onChange }) => {
  return (
    <>
      <h3>Find contacts by name</h3>
      <FilterForm>
        <FilterInput
          type="text"
          name="filter"
          onChange={onChange}
          value={value}
          placeholder="Search name"
          autoComplete="off"
        />
        <FilterBtn className="filter-button" type="submit">
          <MdSearch />
        </FilterBtn>
      </FilterForm>
    </>
  );
};

const mapStateToProps = (state) => ({
  value: state.contacts.filter,
});

const mapDispatchToProps = (dispatch) => ({
  onChange: (e) => dispatch(contactsAction.changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
