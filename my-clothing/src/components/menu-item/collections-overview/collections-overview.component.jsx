import React from "react";
import CollectionPreview from "../../../components/menu-item/preview-collection/collection-preview.component";
import './collections-overview.style.scss';
import { useSelector } from "react-redux";

const CollectionOverview = () => {
    const collections = useSelector(state => state.shop_Data)
     return (
        <div className="collection-overview">
            {collections.map((collection) => (
                <CollectionPreview key={collection.id} {...collection} />
            ))}
        </div>
    );
}
export default CollectionOverview;