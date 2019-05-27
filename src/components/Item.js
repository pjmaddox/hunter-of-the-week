import React from 'react';
import PropTypes from 'prop-types';
import Chip from "@material-ui/core/chip";
import _ from "lodash";



const getTagHtml = (tag) => {
    return (
        <Chip label={tag.title} variant="outlined" color={tag.color}/>
    );
};

const getTagList = (tagList) => {
    return _.map(tagList, tag => getTagHtml(tag));
};

const Item = (props) => {
    let harmValue = props.harm? <span className="harm">,</span> : null;
    let tagList = getTagList(props.tags);
    return (
        <div className="itemContainer" col-sm-12>
            <span className="itemName">{props.name}</span>{harmValue}<span className="tagList">, {tagList}</span>
        </div>
    );
};

Item.propTypes = {
    name: PropTypes.string.isRequired,
    harm: PropTypes.number,
    description: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        color: PropTypes.string,
        styles: PropTypes.string
    }))
};

export default Item;