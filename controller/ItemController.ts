import { useState, useEffect } from "react";
import Item from "../model/Item";
import ItemService from "../service/ItemService";

export const ItemController = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [editingItem, setEditingItem] = useState<Item | null>(null);
    const [inputText, setInputText] = useState('');

    const closeModal = () => {
    setInputText('');
    setEditingItem(null);
    setModalVisible(false);
    };

    const openAddModal = () => {
    setInputText('');
    setEditingItem(null);
    setModalVisible(true);
    };

    const openEditModal = (item: Item) => {
    setInputText(item.title);
    setEditingItem(item);
    setModalVisible(true);
    };

    return{
        closeModal,
        openAddModal, 
        openEditModal
    }
}

