import chefClaudeIcon from "../images/chef-claude-icon.png";

const Header = () => {
  return (
    <header>
      <div id="logo">
        <img src={chefClaudeIcon} alt="ChefClaude logo icon" />
        <span>Chef Claude</span>
      </div>
    </header>
  );
};

export default Header;
