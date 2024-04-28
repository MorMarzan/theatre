export const storageService = {
    query,
    get,
    post,
    put,
    remove,
}

function query(entityType, delay = 500) {
    var entities = JSON.parse(localStorage.getItem(entityType)) || []
    return new Promise(resolve => setTimeout(() => resolve(entities), delay))
}

async function get(entityType, entityId) {
    try {
        const entities = await query(entityType)
        const entity = entities.reduce((foundEntity, row) => {
            return foundEntity || row.find(entity => entity._id === entityId)
        }, null)
        if (!entity) {
            throw new Error(`Get failed, cannot find entity with id: ${entityId} in: ${entityType}`)
        }
        return entity
    } catch (error) {
        console.error(error)
        throw error
    }
}

async function post(entityType, newEntity) {
    newEntity = { ...newEntity }
    newEntity._id = _makeId()
    try {
        const entities = await query(entityType)
        entities.push(newEntity)
        _save(entityType, entities)
        return newEntity
    } catch (error) {
        console.error(error)
        throw error
    }
}


async function put(entityType, updatedEntity) {
    try {
        const entities = await query(entityType)
        const currEntity = await get(entityType, updatedEntity._id)
        const idxI = currEntity.loc.i
        const idxJ = currEntity.loc.j
        if (!idxI || !idxJ) throw new Error(`Update failed, cannot find entity with id: ${updatedEntity._id} in: ${entityType}`)
        entities[idxI].splice(idxJ, 1, updatedEntity)
        _save(entityType, entities)
        return updatedEntity
    } catch (error) {
        console.error(error)
        throw error
    }
}

async function remove(entityType, entityId) {
    try {
        const entities = await query(entityType)
        const idx = entities.findIndex(entity => entity._id === entityId)
        if (idx < 0) {
            throw new Error(`Remove failed, cannot find entity with id: ${entityId} in: ${entityType}`)
        }
        entities.splice(idx, 1)
        _save(entityType, entities)
    } catch (error) {
        console.error(error)
        throw error
    }
}


// Private functions

function _save(entityType, entities) {
    localStorage.setItem(entityType, JSON.stringify(entities))
}

function _makeId(length = 5) {
    var text = ''
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return text
}